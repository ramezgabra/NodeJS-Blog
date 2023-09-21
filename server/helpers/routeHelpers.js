function isActiveRoute(route, currnetroute) {
    return route === currnetroute ? 'active' : '';
}

module.exports = { isActiveRoute };