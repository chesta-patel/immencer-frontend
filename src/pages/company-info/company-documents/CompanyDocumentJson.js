import String from '../../../utils/String'

export const companyDocForm = [
  {
    id: 1,
    label_name: `${String.title}`,
    type: 'text',
    name: `${String.title}`,
    required: `${String.Please_enter} ${String.title}`,
    placeholder: `${String.enter} ${String.title}`,
    key_name: 'title',
  },
  {
    id: 2,
    label_name: `${String.description}`,
    type: 'text',
    name: `${String.description}`,
    required: `${String.Please_enter} ${String.description}`,
    placeholder: `${String.enter} ${String.description}`,
    key_name: 'description',
  },
  {
    id: 3,
    label_name: `${String.sequence_no}`,
    type: 'number',
    name: `${String.seqNo}`,
    required: `${String.Please_enter} ${String.sequence_no}`,
    placeholder: `${String.enter} ${String.sequence_no}`,
    key_name: 'seqNo',
  },
  {
    id: 4,
    label_name: `${String.file}`,
    type: 'file',
    name: `${String.file}`,
    required: `${String.Please_enter} ${String.file}`,
    placeholder: `Choose file`,
    file_id: `Company DocumentFileUpload`,
    key_name: 'assets',
  },
]
export const companyDocTable = [
  {
    id: 1,
    name: `${String.title}`,
  },
  {
    id: 2,
    name: `${String.description}`,
  },
  {
    id: 3,
    name: `${String.uploaded_by}`,
  },
  {
    id: 4,
    name: `${String.updated_by}`,
  },
  {
    id: 5,
    name: `${String.preview}`,
  },
]
