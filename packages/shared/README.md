# @manadr/shared

Package shared chứa các utilities, types và constants dùng chung cho tất cả ứng dụng Manadr.

## Cài đặt

```bash
npm install @manadr/shared
```

hoặc

```bash
yarn add @manadr/shared
```

## Sử dụng

### Types

```typescript
import { Patient, Doctor, Company } from '@manadr/shared/types';

// Sử dụng các type definitions
const patient: Patient = {
  id: '123',
  firstName: 'Nguyễn',
  lastName: 'Văn A',
  // ... other properties
};
```

### Utilities

```typescript
import { formatDate, isValidDate, addDays } from '@manadr/shared/utils';

// Date utilities
const formattedDate = formatDate(new Date(), 'DD/MM/YYYY');
const isValid = isValidDate('2024-01-01');
const futureDate = addDays(new Date(), 7);

// Array utilities
import { groupBy, unique, chunk } from '@manadr/shared/utils';

const grouped = groupBy(items, 'category');
const uniqueItems = unique(array);
const chunkedArray = chunk(largeArray, 10);

// Query string utilities
import { parseQueryString, stringifyQueryString } from '@manadr/shared/utils';

const params = parseQueryString('?name=john&age=30');
const queryString = stringifyQueryString({ name: 'john', age: 30 });
```

### Constants

```typescript
import { API_ENDPOINTS, ERROR_MESSAGES } from '@manadr/shared/constants';

// Sử dụng constants
const userEndpoint = API_ENDPOINTS.USERS;
const errorMsg = ERROR_MESSAGES.VALIDATION_FAILED;
```

## Cấu trúc Types

### IAM (Identity & Access Management)

- `Patient` - Thông tin bệnh nhân
- `Doctor` - Thông tin bác sĩ  
- `Company` - Thông tin công ty
- `Address` - Thông tin địa chỉ
- `Tag` - Thông tin tag/nhãn

### File Types

- `FileUpload` - Interface cho file upload
- `FileMetadata` - Metadata của file

### Corporation Types

- `Corporation` - Thông tin tập đoàn

## Utilities Available

### Date Utils
- `formatDate()` - Format ngày tháng
- `isValidDate()` - Kiểm tra ngày hợp lệ
- `addDays()`, `subtractDays()` - Thêm/bớt ngày
- `getDaysBetween()` - Tính số ngày giữa 2 mốc thời gian

### Array Utils
- `groupBy()` - Nhóm array theo thuộc tính
- `unique()` - Loại bỏ phần tử trùng lặp
- `chunk()` - Chia array thành các phần nhỏ

### Query String Utils
- `parseQueryString()` - Parse query string thành object
- `stringifyQueryString()` - Chuyển object thành query string

## Phát triển

```bash
# Build package
npm run build

# Lint code
npm run lint

# Type checking
npm run check-types
```