// Simple test to verify schema loading
const {getSchemaTypes} = require('./schemaTypes/index.ts')

// Test Brand A
console.log('Testing Brand A schemas...')
const brandASchemas = getSchemaTypes('brand-a')
console.log('Brand A schema count:', brandASchemas.length)
console.log('Brand A schema names:', brandASchemas.map(s => s.name))

// Test Brand B
console.log('\nTesting Brand B schemas...')
const brandBSchemas = getSchemaTypes('brand-b')
console.log('Brand B schema count:', brandBSchemas.length)
console.log('Brand B schema names:', brandBSchemas.map(s => s.name))

// Test unknown brand (should fallback to brand-a)
console.log('\nTesting unknown brand...')
const unknownSchemas = getSchemaTypes('unknown-brand')
console.log('Unknown brand schema count:', unknownSchemas.length)

console.log('\n✅ Schema loading test completed!') 