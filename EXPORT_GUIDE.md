# Hướng dẫn Export Core và Shared Modules

Tài liệu này hướng dẫn cách xuất và sử dụng các package `@manadr/core` và `@manadr/shared` trong các repository khác.

## 📦 Tổng quan Packages

### @manadr/core
Chứa các thành phần React chính:
- Redux store và slices
- React Query setup
- Providers (Redux, React Query)
- Layouts (Dashboard, Auth, Base)
- API services và interceptors
- Custom hooks

### @manadr/shared
Chứa utilities và types dùng chung:
- Type definitions (Patient, Doctor, Company, etc.)
- Utility functions (date, array, query string)
- Constants và enums

## 🚀 Phương pháp Export

### 1. Publish lên npm registry (Khuyến nghị)

#### Bước 1: Chuẩn bị
```bash
# Đảm bảo git clean
git status

# Build packages
npm run build --workspace=@manadr/core
npm run build --workspace=@manadr/shared
```

#### Bước 2: Đăng nhập npm
```bash
npm login
```

#### Bước 3: Publish
```bash
# Sử dụng script tự động
./scripts/publish-packages.sh

# Hoặc publish thủ công
cd packages/shared && npm publish --access public
cd ../core && npm publish --access public
```

#### Bước 4: Sử dụng trong project khác
```bash
# Cài đặt
npm install @manadr/core @manadr/shared

# Hoặc với yarn
yarn add @manadr/core @manadr/shared
```

### 2. Git Submodules (Thay thế)

Nếu không muốn publish lên npm:

```bash
# Trong project đích
git submodule add https://github.com/your-org/manadr-fe.git vendor/manadr-packages

# Cài đặt dependencies
cd vendor/manadr-packages && npm install
npm run build --workspace=@manadr/core
npm run build --workspace=@manadr/shared
```

Trong `package.json` của project đích:
```json
{
  "dependencies": {
    "@manadr/core": "file:./vendor/manadr-packages/packages/core",
    "@manadr/shared": "file:./vendor/manadr-packages/packages/shared"
  }
}
```

### 3. Verdaccio (Private Registry)

Thiết lập private npm registry:

```bash
# Cài đặt Verdaccio
npm install -g verdaccio

# Chạy registry
verdaccio

# Configure npm để sử dụng private registry
npm set registry http://localhost:4873/

# Publish packages
npm publish --registry http://localhost:4873/
```

## 💻 Cách sử dụng trong Project mới

### Setup cơ bản

```typescript
// app.tsx hoặc main.tsx
import React from 'react';
import { AppProvider } from '@manadr/core/providers';
import { DashboardLayout } from '@manadr/core/layouts';

function App() {
  return (
    <AppProvider>
      <DashboardLayout>
        <YourMainContent />
      </DashboardLayout>
    </AppProvider>
  );
}

export default App;
```

### Sử dụng Types

```typescript
// components/PatientForm.tsx
import React from 'react';
import { Patient } from '@manadr/shared/types';

interface PatientFormProps {
  patient?: Patient;
  onSave: (patient: Patient) => void;
}

export function PatientForm({ patient, onSave }: PatientFormProps) {
  // Component logic
}
```

### Sử dụng Utils

```typescript
// utils/helpers.ts
import { formatDate, groupBy } from '@manadr/shared/utils';

export function processPatients(patients: Patient[]) {
  return groupBy(patients, 'departmentId').map(group => ({
    ...group,
    formattedDate: formatDate(group.createdAt, 'DD/MM/YYYY')
  }));
}
```

### Sử dụng Redux Store

```typescript
// hooks/useAuth.ts
import { useAppSelector, useAppDispatch } from '@manadr/core';
import { authActions } from '@manadr/core/store';

export function useAuth() {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth);
  
  const login = (credentials: LoginCredentials) => {
    dispatch(authActions.login(credentials));
  };
  
  return { auth, login };
}
```

## 🔄 Quy trình Update

### 1. Update packages đã publish

```bash
# Trong manadr-fe repository
# 1. Thực hiện thay đổi
# 2. Bump version
npm version patch --workspace=@manadr/core
npm version patch --workspace=@manadr/shared

# 3. Publish
./scripts/publish-packages.sh

# 4. Update trong project sử dụng
npm update @manadr/core @manadr/shared
```

### 2. Semantic Versioning

- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features, backward compatible
- **PATCH** (0.0.1): Bug fixes

```bash
# Bump versions
npm version major --workspace=@manadr/core    # 1.0.0 -> 2.0.0
npm version minor --workspace=@manadr/core    # 1.0.0 -> 1.1.0  
npm version patch --workspace=@manadr/core    # 1.0.0 -> 1.0.1
```

## 🛠️ Troubleshooting

### Build lỗi
```bash
# Clean và rebuild
npm run clean --workspace=@manadr/core
npm run clean --workspace=@manadr/shared
npm run build --workspace=@manadr/core
npm run build --workspace=@manadr/shared
```

### Publish lỗi
```bash
# Kiểm tra npm login
npm whoami

# Kiểm tra quyền truy cập package
npm owner ls @manadr/core

# Dry run publish
npm publish --dry-run
```

### Import lỗi trong project đích
```typescript
// Thay vì
import { Patient } from '@manadr/shared';

// Sử dụng specific import
import { Patient } from '@manadr/shared/types';
```

## 📋 Checklist trước khi Export

- [ ] Tất cả code đã được commit
- [ ] Tests pass (nếu có)
- [ ] Build thành công
- [ ] README.md updated
- [ ] Version bumped appropriately
- [ ] Dependencies được review
- [ ] Breaking changes được document

## 🔗 Links hữu ích

- [npm publishing guide](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry)
- [Semantic Versioning](https://semver.org/)
- [TypeScript Declaration Files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)