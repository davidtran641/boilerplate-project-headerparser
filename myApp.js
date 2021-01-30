const handleWhoAmI = (request) => {
    return {
        'ipaddress': request.headers['x-forwarded-for'],
        'language': request.headers['accept-language'],
        'software': request.headers['user-agent'],
    }
}

exports.handleWhoAmI = handleWhoAmI;