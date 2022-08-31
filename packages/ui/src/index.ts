import Designer from './Designer';
import Form from './Form';
import Viewer from './Viewer';

export { Designer, Viewer, Form };

export type {
  Lang,
  Size,
  Alignment,
  SchemaType,
  BarCodeType,
  TextSchema,
  ImageSchema,
  BarcodeSchema,
  Schema,
  SchemaForUI,
  Font,
  BasePdf,
  Template,
  CommonProps,
  GeneratorOptions,
  GenerateProps,
  UIOptions,
  UIProps,
  PreviewProps,
  DesignerProps,
} from '@pdfme/common';

export {
  BLANK_PDF,
  isTextSchema,
  isImageSchema,
  isBarcodeSchema,
  checkTemplate,
  checkUIProps,
  checkPreviewProps,
  checkDesignerProps,
  checkGenerateProps,
  validateBarcodeInput,
} from '@pdfme/common';
