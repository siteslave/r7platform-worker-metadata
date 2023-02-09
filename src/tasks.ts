import { MetaModel } from './models/metadata'

const metaModel = new MetaModel()

export default async (job: any) => {
  switch (job.name) {
    case 'PERSON': {
      const data = job.data.metadata
      await metaModel.savePerson(data)
      break
    }
    case 'OPD': {
      const data = job.data.metadata
      await metaModel.saveOpd(data)
      break
    }
    case 'IPD': {
      const data = job.data.metadata
      await metaModel.saveIpd(data)
      break
    }

  }
}