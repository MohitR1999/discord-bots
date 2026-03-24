import { LabelBuilder, ModalBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, TextInputBuilder, TextInputStyle } from "discord.js";
import { MONTHS } from '@bots/utils'
import type { NumericOption } from '@bots/utils'
import { BIRTHDAY_MODAL_ID } from './commands'

export const prepareOption = (option: NumericOption) => {
    return new StringSelectMenuOptionBuilder()
                .setLabel(option.label)
                .setValue(`${option.value}`)
}

export const getBirthdayModal = () => {
    // Prepare a high level modal
    const modal = new ModalBuilder().setCustomId(BIRTHDAY_MODAL_ID).setTitle('Set your birthday 🎂')
    
    const daySelector = new TextInputBuilder()
            .setCustomId('day-select')
            .setPlaceholder('Enter the day (1-31)')
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
    
    const dayLabel = new LabelBuilder()
            .setLabel('Please provide your birth date')
            .setTextInputComponent(daySelector)
    
    // Prepare select option for month
    const monthSelector = new StringSelectMenuBuilder()
            .setCustomId('month-select')
            .setPlaceholder('Select the month')
            .setRequired(true)
            .addOptions(MONTHS.map(prepareOption))

    const monthLabel = new LabelBuilder()
            .setLabel('Please provide your birth month')
            .setStringSelectMenuComponent(monthSelector)

    const yearSelector = new TextInputBuilder()
            .setCustomId('year-select')
            .setPlaceholder('Enter your birth year')
            .setRequired(true)
            .setStyle(TextInputStyle.Short)

   const yearLabel = new LabelBuilder()
            .setLabel('Please provide your birth year')
            .setTextInputComponent(yearSelector)

    modal.addLabelComponents(dayLabel, monthLabel, yearLabel)
    return modal;
}