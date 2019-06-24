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
            if (fetcherResults.hasChanges) {
                unfreeze()
            }
        }
    }
    return options
}

export {getOptions}
