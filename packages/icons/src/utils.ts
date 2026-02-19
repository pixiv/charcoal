const calcScaledSize = (name: string, scale: number | string): number => {
    const [size] = name.split('/')
    const numScale = Number(scale ?? '1')

    // Icons 1.0のscale制約
    switch (size) {
        // 16 or 32, x3は許可されない
        case 'Inline': {
            switch (scale) {
                case 2: {
                    return 32
                }

                default: {
                    return 16
                }
            }
        }
        case '24': {
            // 24 or 48 or 72
            return Number(size) * numScale
        }

        // 16, 32 は x1 scale禁止
        default: {
            return Number(size)
        }
    }
}

const calcForceScaledSize = (name: string, scale: number | string): number => {
    const [size] = name.split('/')
    const numScale = Number(scale ?? '1')
    if (size === 'Inline') {
        return 16 * numScale
    }
    return Number(size) * numScale
}

export const calcActualIconSize = (name: string, scale?: number | string | null, unsafeNonGuidelineScale?: number | string | null, unsafeNonGuidelineFixedSize?: number | string | null): number => {
    if (unsafeNonGuidelineFixedSize) {
        return Number(unsafeNonGuidelineFixedSize)
    }
    if (unsafeNonGuidelineScale) {
        return calcForceScaledSize(name, unsafeNonGuidelineScale)
    }
    if (scale) {
        return calcScaledSize(name, scale)
    }
    return calcScaledSize(name, 1)
}