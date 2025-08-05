#!/bin/bash

# Script để publish packages @manadr/core và @manadr/shared
set -e

echo "🔍 Kiểm tra trạng thái git..."
if [ -n "$(git status --porcelain)" ]; then
  echo "❌ Có file chưa commit. Vui lòng commit hoặc stash các thay đổi trước khi publish."
  exit 1
fi

echo "🏗️  Building packages..."

# Build core package
echo "📦 Building @manadr/core..."
cd packages/core
npm run build
cd ../..

# Build shared package 
echo "📦 Building @manadr/shared..."
cd packages/shared
npm run build
cd ../..

echo "✅ Build hoàn thành!"

# Kiểm tra npm login status
echo "🔐 Kiểm tra npm authentication..."
if ! npm whoami > /dev/null 2>&1; then
  echo "❌ Bạn chưa đăng nhập npm. Chạy 'npm login' trước."
  exit 1
fi

# Publish packages
echo "🚀 Publishing packages..."

# Publish shared package trước (vì core có thể phụ thuộc vào shared)
echo "📤 Publishing @manadr/shared..."
cd packages/shared
npm publish --access public
cd ../..

echo "📤 Publishing @manadr/core..."
cd packages/core
npm publish --access public
cd ../..

echo "🎉 Đã publish thành công cả hai packages!"
echo ""
echo "📖 Cách sử dụng trong project khác:"
echo "npm install @manadr/core @manadr/shared"
echo ""
echo "hoặc:"
echo "yarn add @manadr/core @manadr/shared"