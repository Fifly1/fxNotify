fx_version 'cerulean'
game 'gta5'
lua54 'yes'

author 'fx'
description 'fxNotify'
version '1.0'

ui_page 'html/index.html'

client_script 'client.lua'

files {
    'html/*.*'
}

escrow_ignore {
    'client.lua',
    'html/*.*'
}

export 'fx_notify'