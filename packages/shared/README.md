# @manadr/shared

Shared package chứa các utilities, types, constants và functions có thể tái sử dụng trong toàn bộ hệ thống Manadr applications.

## Cài đặt

Trong monorepo này, package sẽ được tự động link thông qua workspace. Để sử dụng trong một app, thêm vào `package.json`:

```json
{
  "dependencies": {
    "@manadr/shared": "*"
  }
}
```

## Cách sử dụng

### Constants

```typescript
import { API_CONFIG, STORAGE_KEYS, DATE_FORMATS } from '@manadr/shared/constants';

// Sử dụng API config
const timeout = API_CONFIG.TIMEOUT;

// Storage keys
localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);

// Date formats
const formattedDate = dayjs().format(DATE_FORMATS.DISPLAY_DATE);
```

### Types

```typescript
import { ApiResponse, User, PaginatedResponse } from '@manadr/shared/types';

// API response typing
const handleResponse = (response: ApiResponse<User[]>) => {
  // response.data sẽ có type User[]
};

// Paginated data
const handlePaginatedData = (data: PaginatedResponse<User>) => {
  // data.data sẽ có type User[]
  // data.total, data.page, etc. có sẵn
};
```

### Utilities

```typescript
import { 
  capitalize, 
  formatCurrency, 
  chunk, 
  deepClone,
  delay,
  generateId 
} from '@manadr/shared/utils';

// String utilities
const title = capitalize('hello world'); // "Hello world"

// Number utilities  
const price = formatCurrency(1000000); // "1.000.000 ₫"

// Array utilities
const chunks = chunk([1,2,3,4,5], 2); // [[1,2], [3,4], [5]]

// Object utilities
const cloned = deepClone(complexObject);

// Async utilities
await delay(1000); // Wait 1 second
const id = generateId(); // Random 8-character ID
```

### Validators

```typescript
import { 
  emailSchema, 
  passwordSchema, 
  loginSchema,
  isValidEmail,
  isValidVietnamesePhone 
} from '@manadr/shared/validators';

// Zod schema validation
const loginResult = loginSchema.safeParse({
  email: 'user@example.com',
  password: 'password123'
});

if (loginResult.success) {
  // loginResult.data có type LoginFormData
}

// Quick validation functions
const isEmail = isValidEmail('test@example.com'); // boolean
const isVnPhone = isValidVietnamesePhone('0123456789'); // boolean
```

### Formatters

```typescript
import { 
  formatDate, 
  formatTimeAgo, 
  formatVND,
  formatPhoneDisplay,
  maskEmail 
} from '@manadr/shared/formatters';

// Date formatting
const date = formatDate(new Date()); // "01/01/2024"
const timeAgo = formatTimeAgo(new Date()); // "5 phút trước"

// Currency formatting
const amount = formatVND(1500000); // "1.500.000 ₫"

// Phone formatting
const phone = formatPhoneDisplay('0123456789'); // "0123 456 789"

// Privacy formatting
const maskedEmail = maskEmail('user@example.com'); // "u***@example.com"
```

## Cấu trúc Package

```
packages/shared/
├── src/
│   ├── constants/     # Application constants
│   ├── types/         # Shared TypeScript types
│   ├── utils/         # Utility functions
│   ├── validators/    # Zod validation schemas
│   ├── formatters/    # Data formatting functions
│   └── index.ts       # Main exports
├── package.json
├── tsconfig.json
├── eslint.config.mjs
└── README.md
```

## Phát triển

### Thêm utility mới

1. Tạo function trong thư mục tương ứng
2. Export từ `index.ts` của thư mục đó
3. Cập nhật main `index.ts` nếu cần
4. Viết test nếu cần thiết

### Thêm type mới

1. Định nghĩa trong `src/types/index.ts`
2. Export từ main `index.ts`
3. Đảm bảo type an toàn với TypeScript strict mode

### Thêm validator mới

1. Tạo Zod schema trong `src/validators/index.ts`
2. Tạo helper function nếu cần
3. Export type từ schema với `z.infer<>`

## Dependencies

- `zod`: Schema validation
- `dayjs`: Date manipulation and formatting

## Scripts

- `yarn lint`: Chạy ESLint
- `yarn check-types`: Kiểm tra TypeScript
- `yarn build`: Build package