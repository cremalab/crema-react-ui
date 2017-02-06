import { defaultTheme, darkTheme } from 'config/theme'

export const ADDON_NAME         = 'themeManager'
export const ADDON_TITLE        = 'Theme Manager'
export const ADDON_CHANGE_EVENT = 'themeManager/change'
export const ADDON_THEME_PARAM  = 'theme'
export const ADDON_THEMES = {
  default : { title: 'Default', config: defaultTheme },
  dark    : { title: 'Dark'   , config: darkTheme    }
}
