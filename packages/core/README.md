# @manadr/core

Package core chứa các thành phần chung cho ứng dụng Manadr như Redux store, React Query setup, providers, layouts và services.

## Cài đặt

```bash
npm install @manadr/core
```

hoặc

```bash
yarn add @manadr/core
```

## Sử dụng

### Redux Store

```typescript
import { store, useAppDispatch, useAppSelector } from '@manadr/core';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <YourApp />
    </Provider>
  );
}

function YourComponent() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(state => state.auth);
  
  // Sử dụng các slice actions
  // dispatch(authActions.login(credentials));
}
```

### React Query

```typescript
import { QueryClient, QueryClientProvider } from '@manadr/core';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <YourApp />
    </QueryClientProvider>
  );
}
```

### Providers

```typescript
import { AppProvider } from '@manadr/core/providers';

function App() {
  return (
    <AppProvider>
      <YourApp />
    </AppProvider>
  );
}
```

### Layouts

```typescript
import { DashboardLayout, AuthLayout } from '@manadr/core/layouts';

function Dashboard() {
  return (
    <DashboardLayout>
      <YourDashboardContent />
    </DashboardLayout>
  );
}

function Login() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
```

### Services

```typescript
import { apiService } from '@manadr/core/services';

// Sử dụng API service
const response = await apiService.get('/users');
```

### Custom Hooks

```typescript
import { useLocalStorage, useSessionStorage } from '@manadr/core/hooks';

function MyComponent() {
  const [value, setValue] = useLocalStorage('key', 'defaultValue');
  const [sessionValue, setSessionValue] = useSessionStorage('sessionKey', null);
  
  return (
    // Your component JSX
  );
}
```

## Peer Dependencies

Package này yêu cầu các peer dependencies sau:

- `react ^19.1.0`
- `react-dom ^19.1.0`

## Phát triển

```bash
# Build package
npm run build

# Lint code
npm run lint

# Type checking
npm run check-types
```