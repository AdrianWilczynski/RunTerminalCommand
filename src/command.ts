export interface TerminalCommand {
    command: string;
    auto: boolean;
    useActive: boolean;
    preserve: boolean;
    name?: string;
    group?: string;
}