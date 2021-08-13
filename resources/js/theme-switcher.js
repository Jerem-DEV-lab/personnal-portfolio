const checkBoxTheme = document.querySelector('.switcher-theme')
const bodyClass     = document.body
const iconSwitcher  = document.getElementById('switch-icon')

const userPrefersDark  = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches

const SUN_ICON  = "fa-sun";
const MOON_ICON = "fa-moon";

function changeIconButtonSwitch(state) {
  if (state === true) {
    iconSwitcher.classList.add(MOON_ICON)
    iconSwitcher.classList.remove(SUN_ICON)
  } else {
    iconSwitcher.classList.add(SUN_ICON)
    iconSwitcher.classList.remove(MOON_ICON)
  }
}

function switchTheme(e) {
  const {checked} = e.target
  if (bodyClass.className.includes('theme-light') && checked) {
    bodyClass.classList.remove('theme-light')
    bodyClass.classList.add('theme-dark')
    changeIconButtonSwitch(true)
  } else {
    bodyClass.classList.remove('theme-dark')
    bodyClass.classList.add('theme-light')
    changeIconButtonSwitch(false)
  }
}

function changeThemePreferenceUser() {
  if (userPrefersDark && !bodyClass.className.includes('theme-light')) {
    checkBoxTheme.checked = true
    bodyClass.classList.add('theme-dark')
    changeIconButtonSwitch(true)
  } else if (userPrefersLight && !bodyClass.className.includes('theme-dark')) {
    checkBoxTheme.checked = false
    bodyClass.classList.add('theme-light')
    changeIconButtonSwitch(checkBoxTheme.checked)
  }
}

checkBoxTheme.addEventListener(('change'), switchTheme)
changeThemePreferenceUser()
