import { MetaModel } from './models/metadata'

const metaModel = new MetaModel()

export default async (job: any) => {
  switch (job.name) {
    case 'METADATA_PERSON': {
      const data = job.data
      await metaModel.savePerson(data)
      break
    }
    case 'METADATA_SERVICE': {
      const data = job.data
      await metaModel.saveService(data)
      break
    }

  }
}