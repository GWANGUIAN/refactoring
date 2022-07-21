class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._title;
  }

  hasTag(arg) {
    return this._tags.includes(arg);
  }
}

class Scroll {
  constructor(id, dataLastCleaned, catalogId, catalog) {
    this._id = id;
    this._catalogItem = catalog.get(catalogId);
    this._lastCleaned = dataLastCleaned;
  }

  get id() {
    return this._id;
  }

  get title() {
    return this._catalogItem._title;
  }

  hasTag(arg) {
    return this._catalogItem._tags.includes(arg);
  }

  needsCleaning(targetDate) {
    const threshold = this.hasTag('revered') ? 700 : 1500;

    return this.daysSinceLastCleaning(targetDate) > threshold;
  }

  daysSinceLastCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}
