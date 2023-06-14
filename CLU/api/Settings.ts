export class Settings {
    /**
     * If Jumping at all is allowed
    */
    public allowJump: boolean;

    /**
     * If wall jump is allowed (requires {@link allowJump} to be enabled)
    */
    public allowWallJump: boolean;

    /**
     * Only moves along strict Axis (multiples of 45°)
    */
    public onlyRoboticMovement: boolean;


    /**
     * default settings
     * @returns the default settings
    */
    public static getDefault(): Settings {
        return new Settings();
    }
}