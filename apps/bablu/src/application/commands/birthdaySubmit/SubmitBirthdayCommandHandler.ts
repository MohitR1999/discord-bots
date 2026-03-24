import { Command } from "../../../domain/Command";
import { CommandInteraction, InteractionReplyOptions, ModalSubmitInteraction } from "discord.js";

import { PinoLogger } from '@bots/utils'

class SubmitBirthdayCommandHandler implements Command {
    constructor(private readonly logger: PinoLogger) { }

    async execute(interaction: CommandInteraction): Promise<InteractionReplyOptions> {
        
    }
}

export { SubmitBirthdayCommandHandler }