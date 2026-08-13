const colorThemes = document.querySelectorAll('[name="theme"]')

//STORING AND APPLYING THEME
const storeTheme = function(theme) {
    localStorage.setItem("theme", theme)
};

const retrieveTheme = function() {
    const activeTheme = localStorage.getItem("theme")
    colorThemes.forEach((themeChange) => {
        if (themeChange.id === activeTheme) {
            themeChange.checked = true
        }
    })
}

colorThemes.forEach((themeChange) => {
    themeChange.addEventListener('click', () => {
        storeTheme(themeChange.id)
    })
})

document.onload = retrieveTheme()