import { AvailableAdjustKeyCode, FieldSectionsValueBoundaries, SectionOrdering, FieldSectionWithoutPosition, FieldSectionValueBoundaries } from './useField.types';
import { FieldSectionType, FieldValueType, FieldSection, MuiPickersAdapter, FieldSectionContentType, PickersTimezone } from '../../../models';
import { PickersLocaleText } from '../../../locales/utils/pickersLocaleTextApi';
export declare const getDateSectionConfigFromFormatToken: <TDate>(utils: MuiPickersAdapter<TDate, any>, formatToken: string) => Pick<FieldSection, 'type' | 'contentType'> & {
    maxLength: number | undefined;
};
export declare const getDaysInWeekStr: <TDate>(utils: MuiPickersAdapter<TDate, any>, timezone: PickersTimezone, format: string) => string[];
export declare const getLetterEditingOptions: <TDate>(utils: MuiPickersAdapter<TDate, any>, timezone: PickersTimezone, sectionType: FieldSectionType, format: string) => string[];
export declare const cleanLeadingZeros: <TDate>(utils: MuiPickersAdapter<TDate, any>, valueStr: string, size: number) => string;
export declare const cleanDigitSectionValue: <TDate>(utils: MuiPickersAdapter<TDate, any>, timezone: PickersTimezone, value: number, sectionBoundaries: FieldSectionValueBoundaries<TDate, any>, section: Pick<FieldSection, 'format' | 'type' | 'contentType' | 'hasLeadingZerosInFormat' | 'hasLeadingZerosInInput' | 'maxLength'>) => string;
export declare const adjustSectionValue: <TDate, TSection extends FieldSection>(utils: MuiPickersAdapter<TDate, any>, timezone: PickersTimezone, section: TSection, keyCode: AvailableAdjustKeyCode, sectionsValueBoundaries: FieldSectionsValueBoundaries<TDate>, activeDate: TDate | null, stepsAttributes?: {
    minutesStep?: number;
}) => string;
export declare const getSectionVisibleValue: (section: FieldSectionWithoutPosition, target: 'input-rtl' | 'input-ltr' | 'non-input') => string;
export declare const cleanString: (dirtyString: string) => string;
export declare const addPositionPropertiesToSections: <TSection extends FieldSection>(sections: FieldSectionWithoutPosition<TSection>[], isRTL: boolean) => TSection[];
export declare const changeSectionValueFormat: <TDate>(utils: MuiPickersAdapter<TDate, any>, valueStr: string, currentFormat: string, newFormat: string) => string;
export declare const doesSectionFormatHaveLeadingZeros: <TDate>(utils: MuiPickersAdapter<TDate, any>, timezone: PickersTimezone, contentType: FieldSectionContentType, sectionType: FieldSectionType, format: string) => boolean;
export declare const splitFormatIntoSections: <TDate>(utils: MuiPickersAdapter<TDate, any>, timezone: PickersTimezone, localeText: PickersLocaleText<TDate>, format: string, date: TDate | null, formatDensity: 'dense' | 'spacious', shouldRespectLeadingZeros: boolean, isRTL: boolean) => FieldSectionWithoutPosition[];
/**
 * Some date libraries like `dayjs` don't support parsing from date with escaped characters.
 * To make sure that the parsing works, we are building a format and a date without any separator.
 */
export declare const getDateFromDateSections: <TDate>(utils: MuiPickersAdapter<TDate, any>, sections: FieldSection[]) => NonNullable<TDate>;
export declare const createDateStrForInputFromSections: (sections: FieldSection[], isRTL: boolean) => string;
export declare const getSectionsBoundaries: <TDate>(utils: MuiPickersAdapter<TDate, any>, timezone: PickersTimezone) => FieldSectionsValueBoundaries<TDate>;
export declare const validateSections: <TSection extends FieldSection>(sections: TSection[], valueType: FieldValueType) => void;
export declare const mergeDateIntoReferenceDate: <TDate>(utils: MuiPickersAdapter<TDate, any>, timezone: PickersTimezone, dateToTransferFrom: TDate, sections: FieldSectionWithoutPosition[], referenceDate: TDate, shouldLimitToEditedSections: boolean) => TDate;
export declare const isAndroid: () => boolean;
export declare const getSectionOrder: (sections: FieldSectionWithoutPosition[], isRTL: boolean) => SectionOrdering;
