window.userPrefersDarkMode = (prefersDarkMode) => {
    if (prefersDarkMode) {
        window.document.body.classList.add('dark');
    } else {
        window.document.body.classList.remove('dark');
    }
}

window.isSystemDarkMode = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

window.addEventListenerForTheme = (dotnetHelper) => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        dotnetHelper.invokeMethodAsync('OnSystemThemeChanged', e.matches);
    });
}