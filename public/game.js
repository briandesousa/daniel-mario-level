kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    clearColor: [0, 0, 1, 1]
})

loadSprite('coin', 'sprites/coin.png')
loadSprite('evil-shroom', 'sprites/evil-shroom.png')
loadSprite('brick', 'sprites/brick.png')
loadSprite('block', 'sprites/block.png')
loadSprite('mario', 'sprites/mario.png')
loadSprite('mushroom', 'sprites/mushroom.png')
loadSprite('surprise', 'sprites/surprise.png')
loadSprite('unboxed', 'sprites/unboxed.png')
loadSprite('pipe-top-left', 'sprites/pipe-top-left.png')
loadSprite('pipe-top-right', 'sprites/pipe-top-right.png')
loadSprite('pipe-bottom-left', 'sprites/pipe-bottom-left.png')
loadSprite('pipe-bottom-right', 'sprites/pipe-bottom-right.png')

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')

    const map = [
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '                                     ',
        '====== =======================  ====='
    ]

    const levelCfg = {
        width: 20,
        height: 20,
        '=': [sprite('block', solid())]
    }

    const gameLevel = addLevel(map, levelCfg)
})

start("game")