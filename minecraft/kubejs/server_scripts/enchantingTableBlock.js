BlockEvents.rightClicked('minecraft:enchanting_table', event => {
    const player = event.player;

    const curiosApi = Java.loadClass('top.theillusivec4.curios.api.CuriosApi');
    const helper = curiosApi.getCuriosHelper();

    const pearl = helper.findFirstCurio(player, 'enigmaticlegacy:enchanter_pearl');
    const ring = helper.findFirstCurio(player, 'enigmaticlegacy:cursed_ring');

    if (!pearl.isPresent() || !ring.isPresent())
    {
        player.displayClientMessage(
            Text.of('Лишь носителю §dКольца Семи проклятий§r и §dЖемчуга заклинателя§r доступна магия создания чар.'),
            true
        );
        event.cancel();
    }
});