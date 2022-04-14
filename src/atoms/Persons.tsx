import { atom } from 'recoil'
import { Node } from '../models/Node'

const persons = atom<Node[]>({
    key: 'persons',
    default: [{ name: '', id: '', children: [] }]
})

export default persons