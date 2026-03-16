import React, {useId} from 'react';
import Svg, {
  Defs,
  Ellipse,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from 'react-native-svg';

export type FolderIconVariant = 'red' | 'pink' | 'brown' | 'yellow' | 'blue';

type FolderPalette = {
  tabStart: string;
  tabEnd: string;
  tabHighlight: string;
  bodyStart: string;
  bodyMid: string;
  bodyEnd: string;
  frontStart: string;
  frontEnd: string;
  topStroke: string;
  middleStroke: string;
  bottomStroke: string;
  outlineMain: string;
  outlineTop: string;
};

type FolderIconProps = SvgProps & {
  variant?: FolderIconVariant;
};

const FOLDER_PALETTES: Record<FolderIconVariant, FolderPalette> = {
  red: {
    tabStart: '#F44746',
    tabEnd: '#F27B7E',
    tabHighlight: '#F9D7D6',
    bodyStart: '#F8CCCC',
    bodyMid: '#F2ABAC',
    bodyEnd: '#EA8F91',
    frontStart: '#F5D9D8',
    frontEnd: '#E79C9F',
    topStroke: '#FDEEEE',
    middleStroke: '#F8E4E5',
    bottomStroke: '#F4CBCD',
    outlineMain: '#D85A60',
    outlineTop: '#D4474B',
  },
  pink: {
    tabStart: '#E85AA9',
    tabEnd: '#F5A0CD',
    tabHighlight: '#FBE1F0',
    bodyStart: '#F9D5E7',
    bodyMid: '#F3B2D5',
    bodyEnd: '#EA93C3',
    frontStart: '#FBE0ED',
    frontEnd: '#E8A3CD',
    topStroke: '#FFF0F8',
    middleStroke: '#F8E3EF',
    bottomStroke: '#F1C6DF',
    outlineMain: '#C65B95',
    outlineTop: '#B34782',
  },
  brown: {
    tabStart: '#9C5C34',
    tabEnd: '#C99870',
    tabHighlight: '#E9D2BF',
    bodyStart: '#E6C9B2',
    bodyMid: '#D7AE8A',
    bodyEnd: '#C79369',
    frontStart: '#ECD8C6',
    frontEnd: '#CDA481',
    topStroke: '#F7EBDD',
    middleStroke: '#E8D7C6',
    bottomStroke: '#D7B79C',
    outlineMain: '#8D5838',
    outlineTop: '#744329',
  },
  yellow: {
    tabStart: '#E6A91A',
    tabEnd: '#F5D15D',
    tabHighlight: '#FFF0BA',
    bodyStart: '#FCE9A6',
    bodyMid: '#F6D975',
    bodyEnd: '#EDC94F',
    frontStart: '#FFF2BF',
    frontEnd: '#F0D166',
    topStroke: '#FFF9DE',
    middleStroke: '#F9EEB6',
    bottomStroke: '#EFD778',
    outlineMain: '#C99622',
    outlineTop: '#A87711',
  },
  blue: {
    tabStart: '#3D7CF4',
    tabEnd: '#7CB2FF',
    tabHighlight: '#D9E8FF',
    bodyStart: '#CFE0FF',
    bodyMid: '#AFCBFF',
    bodyEnd: '#8DB4FF',
    frontStart: '#DDE9FF',
    frontEnd: '#A4C2FF',
    topStroke: '#EFF5FF',
    middleStroke: '#DFEAFF',
    bottomStroke: '#C5D8FF',
    outlineMain: '#4B78CC',
    outlineTop: '#3662B5',
  },
};

const FolderIcon = ({
  width = 128,
  height = 100,
  variant = 'red',
  ...props
}: FolderIconProps): React.JSX.Element => {
  const palette = FOLDER_PALETTES[variant];
  const gradientIdPrefix = useId().replace(/[^a-zA-Z0-9_-]/g, '');
  const tabGradientId = `${gradientIdPrefix}-folder-tab`;
  const bodyGradientId = `${gradientIdPrefix}-folder-body`;
  const frontGradientId = `${gradientIdPrefix}-folder-front`;

  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 128 100"
      fill="none"
      {...props}
    >
      <Defs>
        <LinearGradient id={tabGradientId} x1="29" y1="16" x2="102" y2="40">
          <Stop offset="0" stopColor={palette.tabStart} />
          <Stop offset="1" stopColor={palette.tabEnd} />
        </LinearGradient>
        <LinearGradient id={bodyGradientId} x1="17" y1="34" x2="109" y2="92">
          <Stop offset="0" stopColor={palette.bodyStart} />
          <Stop offset="0.52" stopColor={palette.bodyMid} />
          <Stop offset="1" stopColor={palette.bodyEnd} />
        </LinearGradient>
        <LinearGradient id={frontGradientId} x1="22" y1="45" x2="104" y2="88">
          <Stop offset="0" stopColor={palette.frontStart} />
          <Stop offset="1" stopColor={palette.frontEnd} />
        </LinearGradient>
      </Defs>

      <Ellipse cx="69" cy="90" rx="42" ry="6" fill="#E8E8E8" />

      <Path
        d="M23 29.4c0-4.4 3.6-8 8-8h21.2c3.4 0 6.6-1.4 8.8-3.8l5.4-5.8A11.8 11.8 0 0 1 75 8h16.8c5.2 0 9.7 3.7 10.8 8.8l3.5 16.6H23V29.4Z"
        fill={`url(#${tabGradientId})`}
      />
      <Path
        d="M30.2 25.2c0-2.6 2.1-4.8 4.8-4.8h16.6c2.7 0 5.2-1.1 7-3l3.3-3.5a9.4 9.4 0 0 1 6.8-2.9h15.1c4 0 7.6 2.8 8.4 6.7l1.7 7.7H30.2v-.2Z"
        fill={palette.tabHighlight}
        opacity="0.52"
      />

      <Path
        d="M18 41.5c0-4.7 3.8-8.5 8.5-8.5h83.2c6.5 0 11.6 5.7 10.8 12.1l-4.8 35.3A11.3 11.3 0 0 1 104.5 90h-71A11.5 11.5 0 0 1 22 79.2L18 41.5Z"
        fill={`url(#${bodyGradientId})`}
      />
      <Path
        d="m26.7 41.8 80.8-.1c4.1 0 7.3 3.6 6.8 7.6l-3.2 24.2a8.3 8.3 0 0 1-8.2 7.2H37.6a8.5 8.5 0 0 1-8.4-8l-2.5-25.1Z"
        fill={`url(#${frontGradientId})`}
      />
      <Path
        d="M18.7 45.7h100.9"
        stroke={palette.topStroke}
        strokeWidth="2.6"
        strokeLinecap="round"
        opacity="0.72"
      />
      <Path
        d="M31 55.5h56.3"
        stroke={palette.middleStroke}
        strokeWidth="5"
        strokeLinecap="round"
        opacity="0.58"
      />
      <Path
        d="M36 65.2h48.5"
        stroke={palette.bottomStroke}
        strokeWidth="3.6"
        strokeLinecap="round"
        opacity="0.55"
      />
      <Path
        d="M20.7 39.8 23.8 77a9.5 9.5 0 0 0 9.5 8.7h71.2a9.5 9.5 0 0 0 9.4-8L118 46.6"
        stroke={palette.outlineMain}
        strokeWidth="2.8"
        strokeLinejoin="round"
        strokeLinecap="round"
        opacity="0.9"
      />
      <Path
        d="M23.3 33.7h83.1c7.7 0 13.9 4.9 14.7 11.5"
        stroke={palette.outlineTop}
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.75"
      />
    </Svg>
  );
};

export default FolderIcon;
