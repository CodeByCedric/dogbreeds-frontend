<script setup>
import DogCard from '../components/DogCard.vue';
import { ref } from 'vue';

const dogs = ref([
  {
    id: 2347,
    exercise_needs: 8,
    grooming_requirements: 3,
    trainability: 9,
    name: "Labrador Retriever",
    description: "<p>\n  The Labrador Retriever is a friendly and outgoing breed with a gentle and lovable nature. They are known for their intelligence, loyalty, and versatility. Labradors make great family pets and are excellent with children. They have a medium to large size, typically weighing between 55 to 80 pounds (25 to 36 kilograms) and standing about 21.5 to 24.5 inches (55 to 62 centimeters) tall at the shoulder.\n</p>\n<p>\n  Labradors have a short, dense, and water-resistant coat that comes in three main colors: black, yellow, and chocolate. Their coat requires regular brushing to keep it clean and minimize shedding. Labradors are moderate shedders and may shed more during seasonal changes.\n</p>\n<p>\n  <strong>Temperament and Personality:</strong> Labradors are known for their friendly, outgoing, and eager-to-please nature. They have a naturally gentle and patient temperament, making them excellent companions and therapy dogs. Labradors are highly sociable and get along well with other dogs and pets. They are known for their playfulness and are always up for a game of fetch or a swim. Labradors have a tendency to become overweight if not provided with enough exercise and a balanced diet.\n</p>\n<p>\n  <strong>Exercise Needs:</strong> As an active and energetic breed, Labradors have a medium to high exercise needs. They require daily physical activity to keep them mentally stimulated and physically fit. Labradors love outdoor adventures, such as long walks, jogging, swimming, and playing fetch. Engaging them in mentally stimulating activities, such as obedience training, agility, or scent work, can also help keep them happy and prevent boredom.\n</p>\n<p>\n  <strong>Grooming Requirements:</strong> Labradors have a short coat that is relatively easy to maintain. Regular brushing, preferably once or twice a week, helps remove loose hair and keeps their coat in good condition. They are moderate shedders, so occasional shedding throughout the year is normal. Labradors should be bathed when necessary, such as after outdoor adventures or if they get dirty.\n</p>\n<p>\n  <strong>Trainability:</strong> Labradors are highly intelligent and eager to please, making them highly trainable. They excel in obedience training and are often used as service dogs, search and rescue dogs, and in various working roles. Labradors respond well to positive reinforcement training methods, including praise, treats, and rewards. Early socialization and consistent, positive training from an early age are important to help them grow into well-behaved and well-adjusted adults.\n</p>\n<p>\n  <strong>Protectiveness:</strong> Labradors are generally friendly and social, rather than being highly protective. While they may alert their owners to unfamiliar sounds or visitors, they are not typically aggressive or possessive. Labradors are more likely to greet strangers with wagging tails rather than exhibiting protective behaviors. However, individual personalities may vary, and some Labradors may display more protective instincts than others.\n</p>\n<p>\n  Labradors are beloved for their affectionate nature, loyalty, and versatility. Whether as a family pet, working companion, or therapy dog, they bring joy and companionship to countless households around the world.\n</p>\n",
  },
  {
  id: 2348,
  exercise_needs: 7,
  grooming_requirements: 2,
  trainability: 8,
  name: "Golden Retriever",
  description: "<p>The Golden Retriever is a large-sized breed of dog. They are known for their friendly and tolerant attitudes. They are great family pets and get along very well with strangers and other animals. Golden Retrievers are also known to become particularly attached to their owners.</p><p>Golden Retrievers are very active and fun-loving animals; they are well known for their love of play and for being particularly good with children. The typical golden retriever is calm, naturally intelligent and biddable, with an exceptional eagerness to please.</p>"
},
{
  id: 2349,
  exercise_needs: 6,
  grooming_requirements: 5,
  trainability: 7,
  name: "Siberian Husky",
  description: "<p>The Siberian Husky is a medium-sized working sled dog breed. The breed belongs to the Spitz genetic family. They are known for their amazing endurance and willingness to work. Their blue or multi-colored eyes and striking facial masks only add to the appeal of this breed, which originated in Siberia.</p><p>Huskies are energetic and athletic. They usually have a thick coat that comes in many colors and patterns. Their eyes are typically blue, and they are definitely a head-turner with their majestic look.</p>"
},
{
  id: 2350,
  exercise_needs: 6,
  grooming_requirements: 3,
  trainability: 8,
  name: "Beagle",
  description: "<p>The Beagle is a breed of small hound that is similar in appearance to the much larger foxhound. Beagles are scent hounds, developed primarily for tracking hare, rabbit, deer, and other small game.</p><p>They have a great sense of smell and tracking instinct that sees them employed as detection dogs for prohibited agricultural imports and foodstuffs in quarantine around the world.</p>"
},
{
  id: 2351,
  exercise_needs: 8,
  grooming_requirements: 4,
  trainability: 8,
  name: "Border Collie",
  description: "<p>The Border Collie is a working and herding dog breed developed in the Scottish borders for herding livestock, especially sheep. Considered highly intelligent, extremely energetic, acrobatic and athletic, they frequently compete with great success in sheepdog trials and dog sports.</p><p>They are often cited as the most intelligent of all domestic dogs. Border Collies also remain employed throughout the world in their traditional work of herding livestock.</p>"
},
{
  id: 2352,
  exercise_needs: 5,
  grooming_requirements: 3,
  trainability: 9,
  name: "Poodle",
  description: "<p>The poodle is a breed of domestic dog. Poodles are known for their intelligence and ease of training. Poodles come in three sizes or varieties: the standard, the miniature, and the toy. All of the sizes are considered the same dog breed and are held to the same breed standards.</p><p>Poodles have a dense, curly or corded coat and can be groomed to look like several different breeds. They are often cited as a hypoallergenic dog breed.</p>"
}

]);

</script>

<template>
  <main>
    <div class="home">
      <DogCard></DogCard>
    </div>
  </main>
</template>
