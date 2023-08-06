<script setup>
import { ref } from 'vue'

// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })

const dog = ref({
  id: 2347,
  exercise_needs: 8,
  grooming_requirements: 3,
  trainability: 9,
  name: "Labrador Retriever",
  description: "<p>\n  The Labrador Retriever is a friendly and outgoing breed with a gentle and lovable nature. They are known for their intelligence, loyalty, and versatility. Labradors make great family pets and are excellent with children. They have a medium to large size, typically weighing between 55 to 80 pounds (25 to 36 kilograms) and standing about 21.5 to 24.5 inches (55 to 62 centimeters) tall at the shoulder.\n</p>\n<p>\n  Labradors have a short, dense, and water-resistant coat that comes in three main colors: black, yellow, and chocolate. Their coat requires regular brushing to keep it clean and minimize shedding. Labradors are moderate shedders and may shed more during seasonal changes.\n</p>\n<p>\n  <strong>Temperament and Personality:</strong> Labradors are known for their friendly, outgoing, and eager-to-please nature. They have a naturally gentle and patient temperament, making them excellent companions and therapy dogs. Labradors are highly sociable and get along well with other dogs and pets. They are known for their playfulness and are always up for a game of fetch or a swim. Labradors have a tendency to become overweight if not provided with enough exercise and a balanced diet.\n</p>\n<p>\n  <strong>Exercise Needs:</strong> As an active and energetic breed, Labradors have a medium to high exercise needs. They require daily physical activity to keep them mentally stimulated and physically fit. Labradors love outdoor adventures, such as long walks, jogging, swimming, and playing fetch. Engaging them in mentally stimulating activities, such as obedience training, agility, or scent work, can also help keep them happy and prevent boredom.\n</p>\n<p>\n  <strong>Grooming Requirements:</strong> Labradors have a short coat that is relatively easy to maintain. Regular brushing, preferably once or twice a week, helps remove loose hair and keeps their coat in good condition. They are moderate shedders, so occasional shedding throughout the year is normal. Labradors should be bathed when necessary, such as after outdoor adventures or if they get dirty.\n</p>\n<p>\n  <strong>Trainability:</strong> Labradors are highly intelligent and eager to please, making them highly trainable. They excel in obedience training and are often used as service dogs, search and rescue dogs, and in various working roles. Labradors respond well to positive reinforcement training methods, including praise, treats, and rewards. Early socialization and consistent, positive training from an early age are important to help them grow into well-behaved and well-adjusted adults.\n</p>\n<p>\n  <strong>Protectiveness:</strong> Labradors are generally friendly and social, rather than being highly protective. While they may alert their owners to unfamiliar sounds or visitors, they are not typically aggressive or possessive. Labradors are more likely to greet strangers with wagging tails rather than exhibiting protective behaviors. However, individual personalities may vary, and some Labradors may display more protective instincts than others.\n</p>\n<p>\n  Labradors are beloved for their affectionate nature, loyalty, and versatility. Whether as a family pet, working companion, or therapy dog, they bring joy and companionship to countless households around the world.\n</p>\n",
})

const truncateDescription = (text, length) => {
  return text.length > length ? text.substring(0, length) + "..." : text;
}

</script>

<template>
  <div class="dog-card">
    <!-- Display Dog Data -->
    <h2>{{ dog.name }}</h2>
    <p v-html="truncateDescription(dog.description, 100)"></p>

  </div>
</template>

<style scoped>
/* TODO change to own layout */
.dog-card {
  padding: 1.25rem;
  width: 15.5rem;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 1rem;
}
.dog-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
