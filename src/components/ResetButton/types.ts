import {FC} from 'react';

import {CustomButtonProps} from '@models/components/buttonTypes';

type ResetButtonProps = Omit<CustomButtonProps, 'title'>;

export type ResetButtonType = FC<ResetButtonProps>;
