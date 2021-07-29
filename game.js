kaboom({
    global: true,
    fullscreen: true,
    scale: 2,
    debug: true,
    clearColor: [0, 1, 1, 1]
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
        '   %   =*=%=                         ',
        '                                     ',
        '                            -+       ',
        '                   ^ ^  ^   ()       ',
        '==============================  ====='
    ]

    const levelCfg = {  
        width: 20,
        height: 20,
        '=': [sprite('block'), solid()],
        '$': [sprite('coin')],
        '%': [sprite('surprise'), solid(), 'coin-surprise'],
        '*': [sprite('surprise'), solid(), 'mushroom-surprise'],
        '}': [sprite('unboxed'), solid()],       
        '^': [sprite('evil-shroom'), solid()],
        '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
        ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
        '+': [sprite('pipe-top-right'), solid(), scale(0.5)],
        '-': [sprite('pipe-top-left'), solid(), scale(0.5)],
        '#': [sprite('mushroom'), solid()],
    }

    const gameLevel = addLevel(map, levelCfg)

    const scoreLabel = add([
        text('test'),
        pos(30,6),
        layer('ui'),
        {
            value: 'test'
        },
        color(0,0.5,0)
    ])

    add([
        text('level ' + 'test', pos(4,6))
    ])

    function big() {
        let timer = 0
        let isBig = false
        return {
            update() {
                if (isBig) {
                    timer -= dt()
                    if (timer <= 0) {
                        this.smallify()
                    }
                }
            },
            isBig() {
                return isBig
            },
            smallify() {
                this.scale = vec2(1)
                timer = 0
                isBig = false
            },
            biggify(time) {
                this.scale = vec2(2)
                timer = time
                isBig = true   
            }
        }
    }

    const player = add([
        sprite('mario'),
        solid(),
        pos(30,0),
        body(),
        origin('bot')
    ])

    const MOVE_SPEED = 120
    const JUMP_FORCE = 360

    keyDown('left', () => {
        player.move(-MOVE_SPEED, 0)
    })

    keyDown('right', () => {
        player.move(MOVE_SPEED, 0)
    })
    
    keyPress('space', () => {
        if (player.grounded()) {
            player.jump(JUMP_FORCE)
        }
    })
})

start("game")