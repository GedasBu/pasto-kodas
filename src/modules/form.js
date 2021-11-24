const form = () => {
      return `<div class="form-group mb-2">
                 <input type="text"  class="form-control term" list="datalistOptions" placeholder="Adresas" autocomplete="off"/ >

                         
                 
                 
                 
                 
                 <datalist id="datalistOptions">
                 
                 </datalist>                                 
            </div>
          <div class="form-group mx-sm-3 mb-2">
                <input type="text" class="form-control result" readonly >
          </div>
          <button type="submit" class="btn btn-primary mb-2">Ieškoti kodo</button>
          <button type="reset" class="btn btn-secondary mb-2 history">Paieškos istorija</button>
          <button type="reset" class="btn btn-secondary mb-2 " id="clearHistory">Išvalyti istorija</button>                     
                
`
}

export default form