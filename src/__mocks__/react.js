import React from 'react';

const mockSetState = jest.fn();

module.exports = { ...React, useState: (initial) => [initial, mockSetState] };
