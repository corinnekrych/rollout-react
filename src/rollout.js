const getOptions = (mode, unfreeze) => {
    let options = {
        devModeSecret: 'QVkJNstZeBMjVkTFn6PCWPWt',
        impressionHandler: (reporting, experiment) => {
            if (experiment) {
                console.log(`flag ${JSON.stringify(reporting)} ${JSON.stringify(experiment)}`)
            } else {
                console.log('No experiment configured for flag ')
            }
        }
    }
    if (mode !== 'freeze') {
        options.freeze = 'none'
    } else {
        options.configurationFetchedHandler = fetcherResults => {
            console.log(fetcherResults)
            const data = JSON.parse(fetcherResults.clientData.data)
            console.log(`List of feature flags for available experiments ${data.experiments.forEach(r => {console.log(r.featureFlags[0].name)})}`)
            if (fetcherResults.hasChanges) {
                unfreeze()
            }
        }
    }
    return options
}

export {getOptions}
