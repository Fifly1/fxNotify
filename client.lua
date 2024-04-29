function fx_notify(type, title, message, time)
    SendNUIMessage({
        action = 'notify',
        title = title,
        type = type,
        message = message,
        time = time
    })
end

RegisterNetEvent("fx_notify:Notify")
    AddEventHandler('okokNotify:Alert', function(type, title, message, time)
    fx_notify(type, title, message, time)
end)

exports['fx_notify']:fx_notify("success", "title title", "text text text", 2000)	
