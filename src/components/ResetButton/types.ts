import {CustomButtonProps} from '@models/components/buttonTypes';
import {FC} from 'react';

type ResetButtonProps = Omit<CustomButtonProps, 'title'>;

export type ResetButtonType = FC<ResetButtonProps>;
