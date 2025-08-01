# @repo/core

Core package chứa các service, hook, layout và provider dùng chung cho ứng dụng.

## Cấu trúc

- **hooks/** - Custom React hooks
- **layouts/** - Layout components
- **providers/** - Context providers
- **react-query/** - React Query setup
- **services/** - API services và interceptors
- **store/** - Redux store setup

## Services

### API Service

```typescript
import { apiService } from '@repo/core/services';

// GET request
const response = await apiService.get<User[]>('/users');

// POST request
const newUser = await apiService.post<User>('/users', userData);
```

### Interceptors

Package hỗ trợ interceptors mạnh mẽ cho request và response với các tính năng:

- ✅ Tự động thêm auth token
- ✅ Logging trong development
- ✅ Error tracking và analytics
- ✅ Request/Response timing
- ✅ Retry mechanism
- ✅ Xử lý lỗi thông minh

#### Sử dụng interceptors mặc định

```typescript
import { setupInterceptors } from '@repo/core/services';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.example.com',
});

// Setup với cấu hình mặc định
setupInterceptors(axiosInstance);
```

#### Cấu hình interceptors tùy chỉnh

```typescript
import { setupInterceptors } from '@repo/core/services';

setupInterceptors(axiosInstance, {
  enableLogging: true,          // Bật logging (mặc định chỉ trong development)
  enableErrorTracking: true,    // Bật error tracking
  enableRetry: true,           // Bật retry mechanism
  maxRetries: 5,               // Số lần retry tối đa
  retryDelay: 2000,            // Thời gian delay giữa các lần retry (ms)
});
```

#### Tạo interceptors riêng biệt

```typescript
import { createRequestInterceptor, createResponseInterceptor } from '@repo/core/services';

// Tạo request interceptor với options
const requestInt = createRequestInterceptor({
  enableLogging: true,
});

// Tạo response interceptor với options
const responseInt = createResponseInterceptor({
  enableErrorTracking: false,
});

// Áp dụng thủ công
axiosInstance.interceptors.request.use(
  requestInt.onFulfilled,
  requestInt.onRejected,
);

axiosInstance.interceptors.response.use(
  responseInt.onFulfilled,
  responseInt.onRejected,
);
```

#### Retry Interceptor

```typescript
import { createRetryInterceptor } from '@repo/core/services';

// Tạo retry interceptor
const retryInterceptor = createRetryInterceptor(3, 1000); // 3 lần retry, delay 1s

// Thêm vào response interceptor chain
axiosInstance.interceptors.response.use(
  response => response,
  retryInterceptor
);
```

### Auth Service

```typescript
import { authService } from '@repo/core/services';

// Đăng nhập
await authService.login({ email, password });

// Kiểm tra authentication
const isAuth = authService.isAuthenticated();

// Lấy user hiện tại
const user = authService.getUser();
```

## Hooks

### useAuth

```typescript
import { useAuth } from '@repo/core/hooks';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  
  return (
    <div>
      {isAuthenticated ? (
        <p>Xin chào, {user.name}!</p>
      ) : (
        <button onClick={login}>Đăng nhập</button>
      )}
    </div>
  );
}
```

### useApi

```typescript
import { useApi } from '@repo/core/hooks';

function UserList() {
  const { data: users, loading, error, refetch } = useApi<User[]>('/users');
  
  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Lỗi: {error.message}</div>;
  
  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

## Providers

### AppProvider

```typescript
import { AppProvider } from '@repo/core/providers';

function App() {
  return (
    <AppProvider>
      {/* Your app components */}
    </AppProvider>
  );
}
```

## Error Tracking

Interceptors hỗ trợ tích hợp với các service tracking phổ biến:

### Google Analytics

```typescript
// Tự động gửi error events nếu gtag có sẵn
window.gtag('event', 'api_error', {
  error_message: 'API call failed',
  error_code: 'NETWORK_ERROR',
  status_code: 500,
  url: '/api/users',
});
```

### Sentry

```typescript
// Tự động capture exceptions nếu Sentry có sẵn
window.Sentry.captureException(error, {
  extra: { apiError, requestId, url }
});
```

### Custom Error Tracker

```typescript
// Định nghĩa custom error tracker
window.errorTracker = {
  track: (event, data) => {
    // Gửi đến service tracking của bạn
    fetch('/api/tracking', {
      method: 'POST',
      body: JSON.stringify({ event, data }),
    });
  },
};
```

## Global Events

Interceptors phát ra các events global để components có thể lắng nghe:

```typescript
// Lắng nghe unauthorized events
window.addEventListener('auth:forbidden', (event) => {
  showNotification(event.detail.message);
});

// Dispatch logout từ components
window.dispatchAuthLogout = () => {
  store.dispatch(authSlice.actions.logout());
};
``` 