import $ from 'teaspoon';
import React from 'react';
import TestComponent from './TestComponent';

describe('Test Component', () => {

  describe('Structure Tests', () => {
    const element = $(<TestComponent/>).render();

    it('should display one button', () => {
      element.find('button[type="submit"]').single();
    });
  });
});
