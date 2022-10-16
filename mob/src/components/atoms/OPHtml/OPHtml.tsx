import React, {FC} from 'react';
import {useWindowDimensions} from 'react-native';
import RenderHtml from 'react-native-render-html';
import {TextStyles} from '../../../constants/TextStyles';

interface OPHtmlProps {
  html: string;
  systemFonts?: string[];
  tagsStyles?: any;
}

const DEFAULT_SYSTEM_FONTS = [
  TextStyles.DOSIS_REGULAR.fontFamily!,
  TextStyles.DOSIS_EXTRA_BOLD.fontFamily!,
];

const DEFAULT_TAG_STYLES = {
  p: {
    fontSize: 16,
    fontFamily: TextStyles.DOSIS_REGULAR.fontFamily,
    fontWeight: 'normal',
  },
  h1: {
    fontSize: 18,
    fontFamily: TextStyles.DOSIS_EXTRA_BOLD.fontFamily,
    fontWeight: '800',
  },
};

const OPHtml: FC<OPHtmlProps> = ({
  html,
  systemFonts = DEFAULT_SYSTEM_FONTS,
  tagsStyles = DEFAULT_TAG_STYLES,
}) => {
  const {width} = useWindowDimensions();
  return (
    <RenderHtml
      enableExperimentalGhostLinesPrevention
      enableExperimentalBRCollapsing
      source={{html: html}}
      contentWidth={width}
      systemFonts={systemFonts}
      ignoredDomTags={['br']}
      tagsStyles={tagsStyles}
    />
  );
};

export default OPHtml;
