import initStoryshots from 'storyshots'

initStoryshots()

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
}

global.localStorage = localStorageMock
