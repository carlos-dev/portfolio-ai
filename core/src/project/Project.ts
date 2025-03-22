import Tecnology from '../technology/Technology'
import { Level } from './Level'
import { Type } from './Type'

export default interface Project {
	id: number
	name: string
	description: string
	type: Type
	technologies: Tecnology[]
	images: string[]
	level: Level
	highlight: boolean
	repository: string
}
