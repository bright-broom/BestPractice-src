import '@testing-library/jest-dom';
import 'whatwg-fetch';

// グローバルのモック設定
global.console = {
  ...console,
  // エラーと警告は通常通り表示
  error: jest.fn(),
  warn: jest.fn(),
  // 情報系のログは非表示
  log: jest.fn(),
  info: jest.fn(),
  debug: jest.fn(),
};

// matchMediaのモック
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// IntersectionObserverのモック
class MockIntersectionObserver {
  observe = jest.fn();
  unobserve = jest.fn();
  disconnect = jest.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});

// テスト後のクリーンアップ
afterEach(() => {
  jest.clearAllMocks();
});