interface ISettings {
    /**
     * If Jumping at all is allowed
    */
    allowJump?: boolean;

    /**
     * If wall jump is allowed (requires {@link allowJump} to be enabled)
    */
    allowWallJump?: boolean;

    /**
     * Allows C.L.U. to move along imperfect angles.
     * Perfect Anlges are considered to be multiples of 45°
    */
    allowImperfectAngles?: boolean;
}

export class Settings implements ISettings {
    public allowJump: boolean;
    public allowWallJump: boolean;
    public allowImperfectAngles: boolean;

    constructor(settings: ISettings) {
        this.allowJump = settings.allowJump || false;
        this.allowWallJump = settings.allowWallJump || false;
        this.allowImperfectAngles = settings.allowImperfectAngles || false;
    }

    /**
     * default settings
     * @returns the default settings
    */
    public static getDefault(): Settings {
        return new Settings({});
    }
}