export class Sakljucari {
  sakljucariGornje = {
    sakljucarGornje: null as string | null,
    zamenik1Gornje: null as string | null,
    zamenik2Gornje: null as string | null,
    nepredvidjeniGornje: null as string | null,
  };

  sakljucariDonje = {
    sakljucarDonje: null as string | null,
    zamenik1Donje: null as string | null,
    zamenik2Donje: null as string | null,
    nepredvidjeniDonje: null as string | null,
  };

  setSakljucar(key: string, value: string) {
    // Remove the value from all properties if it exists
    Object.values(this.sakljucariGornje).forEach((_, index) => {
      if (Object.values(this.sakljucariGornje)[index] === value) {
        Object.keys(this.sakljucariGornje)[
          index
        ] as keyof typeof this.sakljucariGornje;
        (this.sakljucariGornje as any)[
          Object.keys(this.sakljucariGornje)[index]
        ] = null;
      }
    });

    Object.values(this.sakljucariDonje).forEach((_, index) => {
      if (Object.values(this.sakljucariDonje)[index] === value) {
        (this.sakljucariDonje as any)[
          Object.keys(this.sakljucariDonje)[index]
        ] = null;
      }
    });

    // Assign value based on the key
    switch (key) {
      case "sakljucar1":
        this.sakljucariGornje.sakljucarGornje = value;
        break;
      case "sakljucar2":
        this.sakljucariDonje.sakljucarDonje = value;
        break;
      case "zamenik1":
        this.sakljucariGornje.zamenik1Gornje = value;
        break;
      case "zamenik2":
        this.sakljucariDonje.zamenik1Donje = value;
        break;
      case "zamenik3":
        this.sakljucariGornje.zamenik2Gornje = value;
        break;
      case "zamenik4":
        this.sakljucariDonje.zamenik2Donje = value;
        break;
      case "neodredjeni1":
        this.sakljucariGornje.nepredvidjeniGornje = value;
        break;
      case "neodredjeni2":
        this.sakljucariDonje.nepredvidjeniDonje = value;
        break;
    }
  }
}

export class Komisija {
  predsednikKomisije: string | null = null;
  zamenikPredsednika: string | null = null;

  clanKomisije2: string | null = null;
  zamenikClana2: string | null = null;

  clanKomisije3: string | null = null;
  zamenikClana3: string | null = null;

  setKomisionar(key: string, value: string) {
    // Remove the value from all properties if it exists
    Object.keys(this).forEach((prop) => {
      if ((this as any)[prop] === value) {
        (this as any)[prop] = null;
      }
    });

    if (key === "predsednikKomisije") this.predsednikKomisije = value;
    if (key === "zamenikPredsednika") this.zamenikPredsednika = value;

    if (key === "clanKomisije2") this.clanKomisije2 = value;
    if (key === "zamenikClana2") this.zamenikClana2 = value;

    if (key === "clanKomisije3") this.clanKomisije3 = value;
    if (key === "zamenikClana3") this.zamenikClana3 = value;
  }
}

export class Vozac {
  vozac: string | null = null;
  zamenaVozaca: string | null = null;

  setVozac(key: string, value: string) {
    Object.keys(this).forEach((prop) => {
      if ((this as any)[prop] === value) {
        (this as any)[prop] = null;
      }
    });

    if (key === "vozac") this.vozac = value;
    if (key === "zamenaVozaca") this.zamenaVozaca = value;
  }
}
