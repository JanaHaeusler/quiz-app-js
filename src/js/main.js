const homeButton = document.querySelector('[data-js=homeButton]')
const bookmarkButton = document.querySelector('[data-js=bookmarkButton]')
const createButton = document.querySelector('[data-js=createButton]')
const profileButton = document.querySelector('[data-js=profileButton]')

const headerHome = document.querySelector('[data-js=headerHome]')
const mainHome = document.querySelector('[data-js=mainHome]')
const headerBookmark = document.querySelector('[data-js=headerBookmark]')
const mainBookmark = document.querySelector('[data-js=mainBookmark]')
const headerCreate = document.querySelector('[data-js=headerCreate]')
const mainCreate = document.querySelector('[data-js=mainCreate]')
const headerProfile = document.querySelector('[data-js=headerProfile]')
const mainProfile = document.querySelector('[data-js=mainProfile]')

/*=======NAVIGATION=====*/

homeButton.addEventListener('click', () => {
  hideAllMain()
  hideAllHeader()
  showMainHome()
  showHeaderHome()
})

bookmarkButton.addEventListener('click', () => {
  hideAllMain()
  hideAllHeader()
  showMainBookmark()
  showHeaderBookmark()
})

createButton.addEventListener('click', () => {
  hideAllMain()
  hideAllHeader()
  showMainCreate()
  showHeaderCreate()
})

profileButton.addEventListener('click', () => {
  hideAllMain()
  hideAllHeader()
  showMainProfile()
  showHeaderProfile()
})

/*=======NAVIGATION Functions General=====*/

function hideAllMain() {
  console.log('Hi')
  mainHome.classList.add('d-none')
  mainBookmark.classList.add('d-none')
  mainCreate.classList.add('d-none')
  mainProfile.classList.add('d-none')
}

function hideAllHeader() {
  console.log('Huhu')
  headerHome.classList.add('d-none')
  headerBookmark.classList.add('d-none')
  headerCreate.classList.add('d-none')
  headerProfile.classList.add('d-none')
}

/*=======NAVIGATION Functions Home=====*/
function showMainHome() {
  console.log('Boo')
  mainHome.classList.remove('d-none')
}

function showHeaderHome() {
  console.log('Foo')
  headerHome.classList.remove('d-none')
}

/*=======NAVIGATION Functions Bookmark=====*/
function showMainBookmark() {
  console.log('Boo')
  mainBookmark.classList.remove('d-none')
}

function showHeaderBookmark() {
  console.log('Foo')
  headerBookmark.classList.remove('d-none')
}

/*=======NAVIGATION Functions Create=====*/
function showMainCreate() {
  console.log('Boo')
  mainCreate.classList.remove('d-none')
}

function showHeaderCreate() {
  console.log('Foo')
  headerCreate.classList.remove('d-none')
}

/*=======NAVIGATION Functions Profile=====*/
function showMainProfile() {
  console.log('Boo')
  mainProfile.classList.remove('d-none')
}

function showHeaderProfile() {
  console.log('Foo')
  headerProfile.classList.remove('d-none')
}

/*=======NAVIGATION Icon Change -  Home=====*/

homeButton.addEventListener('click', () => {
  removeActiveStatusforHomePage()
  addActiveStatusHomeButton()
})

function removeActiveStatusforHomePage() {
  console.log('tutu')
  bookmarkButton.classList.remove('navigation__icon--active')
  createButton.classList.remove('navigation__icon--active')
  profileButton.classList.remove('navigation__icon--active')
}

function addActiveStatusHomeButton() {
  console.log('biba')
  homeButton.classList.add('navigation__icon--active')
}

/*=======NAVIGATION Icon Change -  Bookmark=====*/

bookmarkButton.addEventListener('click', () => {
  removeActiveStatusforBookmarkPage()
  addActiveStatusBookmarkButton()
})

function removeActiveStatusforBookmarkPage() {
  console.log('tutu')
  homeButton.classList.remove('navigation__icon--active')
  createButton.classList.remove('navigation__icon--active')
  profileButton.classList.remove('navigation__icon--active')
}

function addActiveStatusBookmarkButton() {
  console.log('biba')
  bookmarkButton.classList.add('navigation__icon--active')
}

/*=======NAVIGATION Icon Change -  Create=====*/

createButton.addEventListener('click', () => {
  removeActiveStatusforCreatePage()
  addActiveStatusCreateButton()
})

function removeActiveStatusforCreatePage() {
  console.log('tutu')
  homeButton.classList.remove('navigation__icon--active')
  bookmarkButton.classList.remove('navigation__icon--active')
  profileButton.classList.remove('navigation__icon--active')
}

function addActiveStatusCreateButton() {
  console.log('biba')
  createButton.classList.add('navigation__icon--active')
}

/*=======NAVIGATION Icon Change -  Profile=====*/

profileButton.addEventListener('click', () => {
  removeActiveStatusforProfilePage()
  addActiveStatusProfileButton()
})

function removeActiveStatusforProfilePage() {
  console.log('tutu')
  bookmarkButton.classList.remove('navigation__icon--active')
  createButton.classList.remove('navigation__icon--active')
  homeButton.classList.remove('navigation__icon--active')
}

function addActiveStatusProfileButton() {
  console.log('biba')
  profileButton.classList.add('navigation__icon--active')
}

/*=======BOOKMARK=====*/
