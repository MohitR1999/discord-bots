import { CommandInteraction } from "discord.js";
import { Command } from "../../../domain/Command";
import { PinoLogger } from '@bots/utils'
import { getBirthdayModal } from '../../../constants/BirthdayModal'

class AddBirthdayCommandHandler implements Command {
    constructor(private readonly logger: PinoLogger) {}
    
    async execute(interaction: CommandInteraction): Promise<void> {
        this.logger.info(`Executing addBirthday command`)
        const modal = getBirthdayModal()
        await interaction.showModal(modal)
    }
}

export { AddBirthdayCommandHandler }