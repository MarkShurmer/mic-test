import ContactContainer from './contact-container';

describe('Container ', () => {
  it('should be created ok', () => {
    const container = new ContactContainer();
    expect(container).toBeDefined();
  });

  describe('validate', () => {
    it('should give errors if fields not specified', () => {
      const container = new ContactContainer();
      const result = container.validate({});
      expect(result).toBe('You need to enter values for all fields');
    });

    it('should give error if name field not specified', () => {
      const container = new ContactContainer();
      const result = container.validate({companyName: 'abc ltd', telephone: '01222', email: 'g@g.com'});
      expect(result).toBe('You need to enter values for all fields');
    });

    it('should give error if telephone field not specified', () => {
      const container = new ContactContainer();
      const result = container.validate({name: 'John Smith', companyName: 'abc ltd', email: 'g@g.com'});
      expect(result).toBe('You need to enter values for all fields');
    });

    it('should give error if email field not specified', () => {
      const container = new ContactContainer();
      const result = container.validate({name: 'John Smith', companyName: 'abc ltd', telephone: '01222'});
      expect(result).toBe('You need to enter values for all fields');
    });

    it('should give error if company name field not specified', () => {
      const container = new ContactContainer();
      const result = container.validate({name: 'John Smith', telephone: '01222', email: 'g@g.com'});
      expect(result).toBe('You need to enter values for all fields');
    });
  });
  
});
