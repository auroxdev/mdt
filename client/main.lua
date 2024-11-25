local isMdtOpen = false
local tablet

---@param action string The action you wish to target
---@param data? any The data you wish to send along with this action
function SendReactMessage(action, data)
    SendNUIMessage({
        action = action,
        data = data
    })
end

local function openMdt()
    if isMdtOpen then return end

    isMdtOpen = true

    SendReactMessage('setVisible', true)
    SetNuiFocus(true, true)

    while isMdtOpen do
        if not IsEntityPlayingAnim(cache.ped, 'amb@world_human_seat_wall_tablet@female@base', 'base', 3) then
            lib.playAnim(cache.ped, 'amb@world_human_seat_wall_tablet@female@base', 'base', 8.0, 8.0, -1, 49, 0.0, false, 0, false)
        end

        if not tablet then
            local netId = lib.callback.await('m_mdt:server:getTablet', false)

            tablet = NetworkGetEntityFromNetworkId(netId)

            if DoesEntityExist(tablet) then
                local bone = GetPedBoneIndex(cache.ped, 28422)

                lib.waitFor(function()
                    if NetworkGetEntityOwner(tablet) == cache.playerId then
                        return true
                    end
                end, locale('failed_get_controls'), 2000)

                SetEntityCollision(tablet, false, false)
                AttachEntityToEntity(tablet, cache.ped, bone, 0.0, 0.0, 0.03, 0.0, 0.0, 0.0, true, true, false, true, 0, true)
            end
        end

        Wait(0)
    end
end

---@todo remove this later
RegisterCommand('mdt', openMdt, false)

local function closeMdt()
    if not isMdtOpen then return end

    isMdtOpen = false

    SendReactMessage('setVisible', false)
    SetNuiFocus(false, false)

    ClearPedTasks(cache.ped)
    DetachEntity(cache.ped, true, false)
    TriggerServerEvent('m_mdt:server:deleteTablet')

    tablet = nil
end

RegisterNUICallback('closeMdt', function(_, cb)
    cb(1)

    closeMdt()
end)