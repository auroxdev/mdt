local playerTablets = {}

lib.callback.register('m_mdt:server:getTablet', function(source)
    if playerTablets[source] then
        DeleteEntity(playerTablets[source])

        playerTablets[source] = nil
    end

    local ped = GetPlayerPed(source)
    local coords = GetEntityCoords(ped)
    local tablet = CreateObject(`prop_cs_tablet`, coords.x, coords.y, coords.z, true, false, false)

    lib.waitFor(function()
        if DoesEntityExist(tablet) then
            return true
        end
    end, locale('failed_spawn'), 2000)

    playerTablets[source] = tablet

    local netId = NetworkGetNetworkIdFromEntity(tablet)

    return netId
end)

RegisterNetEvent('m_mdt:server:deleteTablet', function()
    local source = source
    local prop = playerTablets[source]

    if prop then
        if DoesEntityExist(prop) then
            DeleteEntity(prop)
        end

        playerTablets[source] = nil
    end
end)