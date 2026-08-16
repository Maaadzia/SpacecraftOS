const colorThemes = document.querySelectorAll('[name="theme"]')

//STORING AND APPLYING THEME
const storeTheme = function(theme) {
    localStorage.setItem("theme", theme)
};

const setTheme = function() {
    const activeTheme = localStorage.getItem("theme")
    colorThemes.forEach((themeChange) => {
        if (themeChange.id === activeTheme) {
            themeChange.checked = true
        }
    })
    //IF HAS NOT WORKS (FALLBACK FOR NO :HAS() SUPPORT)
    document.documentElement.className = theme
}

colorThemes.forEach((themeChange) => {
    themeChange.addEventListener('click', () => {
        storeTheme(themeChange.id)
    })
})

document.onload = setTheme()