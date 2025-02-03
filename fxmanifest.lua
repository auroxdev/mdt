fx_version 'cerulean'
game 'gta5'

name 'aurox_mdt'
author 'mafewtm'
description 'Just another MDT'
repository 'https://github.com/auroxdev/mdt'
version '1.0.0'

ox_lib 'locale'

ui_page 'web/build/index.html'

shared_script '@ox_lib/init.lua'

client_script 'client/main.lua'

server_scripts {
    '@oxmysql/lib/MySQL.lua',
    'server/main.lua'
}

files {
    'locales/*.json',
    'web/build/index.html',
    'web/build/assets/*.*'
}

lua54 'yes'
use_experimental_fxv2_oal 'yes'