using Microsoft.JSInterop;

namespace Wanrick.GitHub.Io.Web;

public class AppTheme
{
    private readonly IJSRuntime _jsRuntime;
    
    public AppTheme(IJSRuntime jsRuntime)
    {
        _jsRuntime = jsRuntime;
    }
    
    private bool _userPrefersDarkMode;
    
    public bool UserPrefersDarkMode
    {
        get => _userPrefersDarkMode;
        set
        {
            _userPrefersDarkMode = value;
            _jsRuntime.InvokeVoidAsync("userPrefersDarkMode", value);
            OnThemeChanged?.Invoke();
        }
    }

    public async Task<bool> IsSystemDarkMode() => await _jsRuntime.InvokeAsync<bool>("isSystemDarkMode");
    
    public event Action OnThemeChanged;
    
    public async Task ListenForThemeChange()
    {
        await _jsRuntime.InvokeVoidAsync("addEventListenerForTheme", DotNetObjectReference.Create(this));
    }
    
    [JSInvokable]
    public async Task OnSystemThemeChanged(bool isDarkMode)
    {
        UserPrefersDarkMode = isDarkMode;
    }
}