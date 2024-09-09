fx_version 'cerulean'
game 'gta5'

author 'mafewtm'
name 'm_mdt'
description ''
repository 'https://github.com/mafewtm/m_mdt
version '1.0.0'

ui_page 'web/build/index.html'

shared_script '@ox_lib/init.lua'

client_script 'client/main.lua'

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/main.lua'
}

files {
    'config/client.lua',
    'config/shared.lua',
    'web/build/index.html',
    'web/build/assets/*.*'
}

lua54 'yes'
use_experimental_fxv2_oal 'yes'